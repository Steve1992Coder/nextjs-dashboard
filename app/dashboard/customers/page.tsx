const bcrypt = require('bcrypt');
export default async function Page() {
  const hashedPassword = await bcrypt.hash('123456', 10);
  return <p>Customer Page ${hashedPassword}</p>;
}
