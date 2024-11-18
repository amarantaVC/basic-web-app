export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return "16-11247"; // Tu USB ID
  }

  if (query.toLowerCase().includes("name")) {
    return "AmarantaVc"; // Tu nombre
  }

  // Nueva lógica para operaciones matemáticas
  const mathMatch = query.match(/(\d+)\s*plus\s*(\d+)/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1], 10);
    const num2 = parseInt(mathMatch[2], 10);
    return (num1 + num2).toString();
  }

  // Lógica para encontrar el número más grande
  const largestMatch = query.match(/largest:\s*([\d\s,]+)/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    return Math.max(...numbers).toString();
  }

  return "";
}