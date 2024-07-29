const express = require('express');
const app = express();

app.use(express.json());

app.post('/hitung_gaji', (req, res) => {
    const { jam_kerja, tarif_per_jam } = req.body;

    if (typeof jam_kerja !== 'number' || typeof tarif_per_jam !== 'number') {
        return res.status(400).json({ error: 'tipe data harus angka' });
    }

    if (jam_kerja < 0 || tarif_per_jam < 0) {
        return res.status(400).json({ error: 'jam kerja dan tarif tidok boleh minus' });
    }

    let total_gaji;
    if (jam_kerja > 40) {
        const gaji_normal = 40 * tarif_per_jam;
        const gaji_lembur = (jam_kerja - 40) * (tarif_per_jam * 1.5);
        total_gaji = gaji_normal + gaji_lembur;
    } else {
        total_gaji = jam_kerja * tarif_per_jam;
    }

    res.json({ total_gaji });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});