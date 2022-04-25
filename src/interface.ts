// interfaces ====================================>>>>
interface Ubinkayu {
  readonly pid: number;
  nama: string;
  age?: number;
}

const userContoh: Ubinkayu = {
  pid: 5,
  nama: "restu",
};
console.log(userContoh);
