export const metadata = {
  title: "The Real Guardians",
  description: "Guardianas Estelares — presentación de personajes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
