// Object ====================================>>>>

const user: { id: number; name: string } = {
  id: 1,
  name: "gerry",
};

console.log(user);
// Atau ====================================>>>>

type Ubin = {
  pid: number;
  nama: string;
};

const nanas: Ubin = {
  pid: 5,
  nama: "restu",
};
console.log(nanas);
