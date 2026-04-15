const lines = [
  "Ibrahim Quaizar",
  "Computer Engineering @ Stony Brook",
  "Email: imibrahimq@gmail.com",
  "Focus: AI systems, full-stack development, product-driven engineering",
  "",
  "Projects",
  "MatchedIn - AI Candidate Matching Platform: React, FastAPI, Python, KNN, Gemini API",
  "Hands-Up - ASL to Speech System: TensorFlow, OpenCV, MediaPipe",
  "Northwell Forecasting Dashboard: Python, Pandas, Prophet, Streamlit",
  "",
  "Experience",
  "Northwell Health - AI/Data Intern",
  "NexSav - Web Developer Intern",
  "",
  "Leadership",
  "Rube Goldberg Club - President",
];

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function buildPdf() {
  const text = lines
    .map((line, index) => `BT /F1 12 Tf 72 ${742 - index * 22} Td (${escapePdfText(line)}) Tj ET`)
    .join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${text.length} >> stream\n${text}\nendstream endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  }

  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (const offset of offsets.slice(1)) {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

export function GET() {
  return new Response(buildPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ibrahim-Quaizar-Resume.pdf"',
    },
  });
}
