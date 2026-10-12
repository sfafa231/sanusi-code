const produk = [
  { nama: "Sneakers Urban", harga: 229000, emoji: "👟" },
  { nama: "Tas Ransel Keren", harga: 189000, emoji: "🎒" },
  { nama: "Kacamata Retro", harga: 99000, emoji: "🕶" },
  { nama: "Jam Tangan Minimalis", harga: 259000, emoji: "⌚" },
  { nama: "Headphone Bass", harga: 349000, emoji: "🎧" },
  { nama: "Botol Minum Premium", harga: 79000, emoji: "🍶" },
];

let cart = 0;

function rupiah(n) {
  return "Rp" + n.toLocaleString("id-ID");
}

const grid = document.getElementById("grid");
grid.innerHTML = produk.map((p, i) => `
  <div class="card">
    <div class="emoji">${p.emoji}</div>
    <div class="nama">${p.nama}</div>
    <div class="harga">${rupiah(p.harga)}</div>
    <button class="beli" onclick="beli(${i})">🛒 Beli Sekarang</button>
  </div>`).join("");

function beli(i) {
  cart++;
  document.getElementById("cartCount").textContent = cart;
  const p = produk[i];
  alert(`${p.nama} masuk keranjang!\nTotal: ${cart} item`);
}

document.getElementById("btnCart").onclick = () => {
  alert(cart > 0 ? `Keranjang berisi ${cart} item 🛒` : "Keranjang masih kosong 😢");
};