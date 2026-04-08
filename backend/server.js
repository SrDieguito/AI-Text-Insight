import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔍 DEBUG: ver si carga la API key
console.log("API KEY:", process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "El texto está vacío",
      });
    }

    const prompt = `
Analiza el siguiente texto y responde SOLO en JSON válido:

{
  "summary": "máximo 2 oraciones",
  "sentiment": "positivo | negativo | neutral",
  "tags": ["tag1", "tag2", "tag3"]
}

Texto:
${text}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // 👈 IMPORTANTE
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices[0].message.content;

    console.log("RESPUESTA IA:", content); // 👈 DEBUG

    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      return res.status(500).json({
        error: "No se encontró JSON en la respuesta",
        raw: content,
      });
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return res.json(parsed);

  } catch (error) {
    console.error("ERROR REAL:", error);

    return res.status(500).json({
      error: error.message || "Error en el servidor",
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});