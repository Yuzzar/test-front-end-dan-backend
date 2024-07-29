import java.util.Scanner;

public class GajiKaryawan {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Masukkan jumlah jam kerja: ");
        double jamKerja = scanner.nextDouble();

        System.out.print("Masukkan tarif per jam: ");
        double tarifPerJam = scanner.nextDouble();

        if (jamKerja < 0 || tarifPerJam < 0) {
            System.out.println("Jam kerja dan tarif per jam harus berupa angka positif.");
            return;
        }

        double totalGaji;
        if (jamKerja > 40) {
            double gajiNormal = 40 * tarifPerJam;
            double gajiLembur = (jamKerja - 40) * (tarifPerJam * 1.5);
            totalGaji = gajiNormal + gajiLembur;
        } else {
            totalGaji = jamKerja * tarifPerJam;
        }

        System.out.println("Total gaji: " + totalGaji);
    }
}