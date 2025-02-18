export const bookSchema = {
  body: {
      type: "object",
      required: ["titre", "auteur"],
      properties: {
          titre: { type: "string" },
          auteur: { type: "string" },
          description: { type: "string" },
          format: {
              type: "string",
              enum: ["poche", "manga", "audio"],
              default: "poche"
          }
      },
      additionalProperties: false
  }
};

export const responseSchema = {
  200: {
      type: "object",
      properties: {
          _id: { type: "string" },
          titre: { type: "string" },
          auteur: { type: "string" },
          description: { type: "string" },
          format: { type: "string" }
      }
  }
};

export const allBooksSchema = {   
  200: {
    type: "array",
    items: {
      type: "object",
      properties: {
        _id: { type: "string" },
        titre: { type: "string" },
        auteur: { type: "string" },
        description: { type: "string" },
        format: { type: "string" }
      }
    }
  }
};
