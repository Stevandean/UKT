-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2023 at 06:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ukt`
--

-- --------------------------------------------------------

--
-- Table structure for table `cabang`
--

CREATE TABLE `cabang` (
  `id_cabang` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cabang`
--

INSERT INTO `cabang` (`id_cabang`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'malang', '2023-04-17 06:50:18', '2023-04-17 06:50:18');

-- --------------------------------------------------------

--
-- Table structure for table `daftar_jurus`
--

CREATE TABLE `daftar_jurus` (
  `id_daftar_jurus` int(11) NOT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_sambung`
--

CREATE TABLE `detail_sambung` (
  `id_detail_sambung` int(11) NOT NULL,
  `id_sambung` int(11) NOT NULL,
  `posisi` int(11) DEFAULT NULL,
  `id_siswa` int(11) NOT NULL,
  `nilai` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detail_sambung`
--

INSERT INTO `detail_sambung` (`id_detail_sambung`, `id_sambung`, `posisi`, `id_siswa`, `nilai`, `createdAt`, `updatedAt`) VALUES
(1, 5, 2, 2, 75, '2023-04-17 07:14:53', '2023-04-17 15:12:24'),
(2, 5, 2, 2, 75, '2023-04-17 07:14:53', '2023-04-17 15:12:24');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `tipe` enum('ukcw','ukt_jambon','ukt_hijau','ukt_putih') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id_event`, `name`, `tanggal`, `tipe`, `createdAt`, `updatedAt`) VALUES
(1, 'Puncak Akbar', '2023-04-01 00:00:00', 'ukcw', '2023-04-17 07:10:35', '2023-04-17 07:10:35');

-- --------------------------------------------------------

--
-- Table structure for table `fisik`
--

CREATE TABLE `fisik` (
  `id_fisik` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') NOT NULL,
  `peserta` enum('Remaja - Laki laki','Remaja - Perempuan','Privat - Laki laki','Privat - Perempuan') NOT NULL,
  `mft` int(11) DEFAULT NULL,
  `push_up` int(11) DEFAULT NULL,
  `spir_perut_atas` int(11) DEFAULT NULL,
  `spir_perut_bawah` int(11) DEFAULT NULL,
  `spir_dada` int(11) DEFAULT NULL,
  `plank` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jurus`
--

CREATE TABLE `jurus` (
  `id_jurus` int(11) DEFAULT NULL,
  `id_siswa` int(11) NOT NULL,
  `jurus1A` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kunci_soal`
--

CREATE TABLE `kunci_soal` (
  `id_kunci_soal` varchar(255) NOT NULL,
  `id_soal` varchar(255) NOT NULL,
  `opsi` enum('opsi1','opsi2','opsi3','opsi4') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lembar_soal`
--

CREATE TABLE `lembar_soal` (
  `id_lembar_soal` varchar(255) NOT NULL,
  `id_ranting` int(11) NOT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penguji`
--

CREATE TABLE `penguji` (
  `id_penguji` int(11) NOT NULL,
  `NIW` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_role` varchar(255) NOT NULL,
  `id_ranting` int(11) DEFAULT NULL,
  `id_cabang` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `no_wa` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penguji`
--

INSERT INTO `penguji` (`id_penguji`, `NIW`, `name`, `id_role`, `id_ranting`, `id_cabang`, `username`, `foto`, `password`, `no_wa`, `createdAt`, `updatedAt`) VALUES
(2, '4884628', 'test a8', 'penguji', 1, 1, 'test a8', 'foto-1681715373145.jpg', '$2b$10$6SdUBWzYI5/p6zMzgxkxEeaTLdLsG8XUfgLTNXKnzWCy3a7E9k5FO', 545641, '2023-04-17 07:09:33', '2023-04-17 07:09:33');

-- --------------------------------------------------------

--
-- Table structure for table `pengurus`
--

CREATE TABLE `pengurus` (
  `id_pengurus` int(11) NOT NULL,
  `NIW` varchar(255) DEFAULT NULL,
  `jabatan` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_role` varchar(255) NOT NULL,
  `id_ranting` int(11) DEFAULT NULL,
  `id_cabang` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `no_wa` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ranting`
--

CREATE TABLE `ranting` (
  `id_ranting` int(11) NOT NULL,
  `id_cabang` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ranting`
--

INSERT INTO `ranting` (`id_ranting`, `id_cabang`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'sawojajar', '2023-04-17 06:50:27', '2023-04-17 06:50:27');

-- --------------------------------------------------------

--
-- Table structure for table `rayon`
--

CREATE TABLE `rayon` (
  `id_rayon` int(11) NOT NULL,
  `id_ranting` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rayon`
--

INSERT INTO `rayon` (`id_rayon`, `id_ranting`, `name`, `alamat`, `tanggal`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'fesmala', 'tulungrejo gajahmada no.10', '2023-03-15 00:00:00', '2023-04-17 07:11:19', '2023-04-17 07:11:19');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id_role` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `role`, `createdAt`, `updatedAt`) VALUES
('admin', 'admin', '2023-04-16 11:50:13', '2023-04-16 11:50:13'),
('penguji', 'penguji', '2023-04-17 07:09:24', '2023-04-17 07:09:24'),
('siswa', 'siswa', '2023-04-17 07:10:04', '2023-04-17 07:10:04'),
('super admin', 'super admin', '2023-04-16 11:50:18', '2023-04-16 11:50:18');

-- --------------------------------------------------------

--
-- Table structure for table `sambung`
--

CREATE TABLE `sambung` (
  `id_sambung` int(11) NOT NULL,
  `id_penguji` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sambung`
--

INSERT INTO `sambung` (`id_sambung`, `id_penguji`, `createdAt`, `updatedAt`) VALUES
(5, 2, '2023-04-17 07:14:53', '2023-04-17 15:32:10');

-- --------------------------------------------------------

--
-- Table structure for table `senam`
--

CREATE TABLE `senam` (
  `id_senam` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `senam69` tinyint(1) DEFAULT NULL,
  `senam23` tinyint(1) DEFAULT NULL,
  `senam14` tinyint(1) DEFAULT NULL,
  `senam90` tinyint(1) DEFAULT NULL,
  `senam61` tinyint(1) DEFAULT NULL,
  `senam49` tinyint(1) DEFAULT NULL,
  `senam59` tinyint(1) DEFAULT NULL,
  `senam64` tinyint(1) DEFAULT NULL,
  `senam12` tinyint(1) DEFAULT NULL,
  `senam33` tinyint(1) DEFAULT NULL,
  `senam44` tinyint(1) DEFAULT NULL,
  `senam11` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230102013923-create-event.js'),
('20230300142921-create-role.js'),
('20230301133553-create-cabang.js'),
('20230301133554-create-ranting.js'),
('20230310223817-create-rayon.js'),
('20230310233601-create-user.js'),
('20230310235855-create-siswa.js'),
('20230311000358-create-penguji.js'),
('20230311001144-create-pengurus.js'),
('20230311042610-create-senam.js'),
('20230311043129-create-jurus.js'),
('20230311043544-create-fisik.js'),
('20230311043752-create-teknik.js'),
('20230311051511-create-ukcw.js'),
('20230311084655-create-ukt-jambon.js'),
('20230311084722-create-ukt-hijau.js'),
('20230311084741-create-ukt-putih.js'),
('20230320184107-create-lembar-soal.js'),
('20230320184334-create-soal.js'),
('20230320185257-create-kunci-soal.js'),
('20230321133646-create-session.js'),
('20230411172059-create-ukt.js'),
('20230416112055-create-standar-fisik.js'),
('20230416161827-create-daftar-jurus.js'),
('20230416161922-create-soal-jurus.js'),
('20230417042604-create-sambung.js'),
('20230417042643-create-detail-sambung.js');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id_session` int(11) NOT NULL,
  `id_lembar_soal` varchar(255) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `nilai` int(11) NOT NULL,
  `waktu_pengerjaan` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id_siswa` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `nis` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_role` varchar(255) NOT NULL,
  `jenis_latihan` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('pria','perempuan') DEFAULT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') DEFAULT NULL,
  `id_ranting` int(11) NOT NULL,
  `id_rayon` int(11) DEFAULT NULL,
  `tingkatan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id_siswa`, `id_event`, `nis`, `name`, `id_role`, `jenis_latihan`, `jenis_kelamin`, `tipe_ukt`, `id_ranting`, `id_rayon`, `tingkatan`, `createdAt`, `updatedAt`) VALUES
(2, 1, 2147483647, 'Puss in boots', 'siswa', 'hard', 'pria', NULL, 1, 1, 'kuning', '2023-04-17 07:11:25', '2023-04-17 07:11:25'),
(3, 1, 2147483647, 'schwarzenagger', 'siswa', 'hard', 'pria', NULL, 1, 1, 'kuning', '2023-04-17 07:11:38', '2023-04-17 07:11:38');

-- --------------------------------------------------------

--
-- Table structure for table `soal`
--

CREATE TABLE `soal` (
  `id_soal` varchar(255) NOT NULL,
  `id_lembar_soal` varchar(255) NOT NULL,
  `pertanyaan` varchar(255) DEFAULT NULL,
  `opsi1` varchar(255) DEFAULT NULL,
  `opsi2` varchar(255) DEFAULT NULL,
  `opsi3` varchar(255) DEFAULT NULL,
  `opsi4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `soal_jurus`
--

CREATE TABLE `soal_jurus` (
  `id_soal_jurus` int(11) NOT NULL,
  `id_daftar_jurus` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `penilaian` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `standar_fisik`
--

CREATE TABLE `standar_fisik` (
  `id_standar_fisik` int(11) NOT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') NOT NULL,
  `peserta` enum('Remaja - Laki laki','Remaja - Perempuan','Privat - Laki laki','Privat - Perempuan') NOT NULL,
  `mft` int(11) DEFAULT NULL,
  `push_up` int(11) DEFAULT NULL,
  `spir_perut_atas` int(11) DEFAULT NULL,
  `spir_perut_bawah` int(11) DEFAULT NULL,
  `spir_dada` int(11) DEFAULT NULL,
  `plank` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `standar_fisik`
--

INSERT INTO `standar_fisik` (`id_standar_fisik`, `tipe_ukt`, `peserta`, `mft`, `push_up`, `spir_perut_atas`, `spir_perut_bawah`, `spir_dada`, `plank`, `createdAt`, `updatedAt`) VALUES
(1, 'UKT Jambon', 'Remaja - Laki laki', NULL, NULL, NULL, NULL, NULL, NULL, '2023-04-16 11:52:15', '2023-04-16 11:52:15'),
(2, 'UKT Jambon', 'Privat - Laki laki', 42, 30, 23, 34, 25, 3000, '2023-04-16 11:53:55', '2023-04-16 11:53:55');

-- --------------------------------------------------------

--
-- Table structure for table `teknik`
--

CREATE TABLE `teknik` (
  `id_teknik` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `teknik1` varchar(255) DEFAULT NULL,
  `teknik2` varchar(255) DEFAULT NULL,
  `teknik3` varchar(255) DEFAULT NULL,
  `teknik4` varchar(255) DEFAULT NULL,
  `teknik5` varchar(255) DEFAULT NULL,
  `teknik6` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ukcw`
--

CREATE TABLE `ukcw` (
  `id_ukcw` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_rayon` int(11) NOT NULL,
  `keshan` int(11) DEFAULT NULL,
  `senam` int(11) DEFAULT NULL,
  `jurus` int(11) DEFAULT NULL,
  `fisik` int(11) DEFAULT NULL,
  `teknik` int(11) DEFAULT NULL,
  `sambung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ukt`
--

CREATE TABLE `ukt` (
  `id_ukt` int(11) NOT NULL,
  `tipe_ukt` enum('UKT Jambon','UKT Hijau','UKT Putih','UKCW') NOT NULL,
  `keshan` int(11) DEFAULT NULL,
  `senam` int(11) DEFAULT NULL,
  `jurus` int(11) DEFAULT NULL,
  `teknik` int(11) DEFAULT NULL,
  `sambung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ukt_hijau`
--

CREATE TABLE `ukt_hijau` (
  `id_ukt_hijau` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_rayon` int(11) NOT NULL,
  `keshan` int(11) DEFAULT NULL,
  `senam` int(11) DEFAULT NULL,
  `jurus` int(11) DEFAULT NULL,
  `fisik` int(11) DEFAULT NULL,
  `teknik` int(11) DEFAULT NULL,
  `sambung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ukt_jambon`
--

CREATE TABLE `ukt_jambon` (
  `id_ukt_jambon` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_rayon` int(11) NOT NULL,
  `keshan` int(11) DEFAULT NULL,
  `senam` int(11) DEFAULT NULL,
  `jurus` int(11) DEFAULT NULL,
  `fisik` int(11) DEFAULT NULL,
  `teknik` int(11) DEFAULT NULL,
  `sambung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ukt_putih`
--

CREATE TABLE `ukt_putih` (
  `id_ukt_putih` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_rayon` int(11) NOT NULL,
  `keshan` int(11) DEFAULT NULL,
  `senam` int(11) DEFAULT NULL,
  `jurus` int(11) DEFAULT NULL,
  `fisik` int(11) DEFAULT NULL,
  `teknik` int(11) DEFAULT NULL,
  `sambung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `NIW` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_role` varchar(255) NOT NULL,
  `id_ranting` int(11) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `no_wa` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `NIW`, `username`, `name`, `id_role`, `id_ranting`, `foto`, `password`, `no_wa`, `createdAt`, `updatedAt`) VALUES
(2, '1213441', 'hartono', 'hartono', 'admin', 1, 'foto-1681714235585.jpg', '$2b$10$Ko7yTBlklYXQD15L5th2GuH30GblLdRXMsit5fHXdj.Hs9XZ.Qkh.', 2147483647, '2023-04-17 06:50:35', '2023-04-17 06:50:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cabang`
--
ALTER TABLE `cabang`
  ADD PRIMARY KEY (`id_cabang`);

--
-- Indexes for table `daftar_jurus`
--
ALTER TABLE `daftar_jurus`
  ADD PRIMARY KEY (`id_daftar_jurus`);

--
-- Indexes for table `detail_sambung`
--
ALTER TABLE `detail_sambung`
  ADD PRIMARY KEY (`id_detail_sambung`),
  ADD KEY `id_sambung` (`id_sambung`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Indexes for table `fisik`
--
ALTER TABLE `fisik`
  ADD PRIMARY KEY (`id_fisik`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `jurus`
--
ALTER TABLE `jurus`
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `kunci_soal`
--
ALTER TABLE `kunci_soal`
  ADD PRIMARY KEY (`id_kunci_soal`),
  ADD KEY `id_soal` (`id_soal`);

--
-- Indexes for table `lembar_soal`
--
ALTER TABLE `lembar_soal`
  ADD PRIMARY KEY (`id_lembar_soal`),
  ADD KEY `id_ranting` (`id_ranting`);

--
-- Indexes for table `penguji`
--
ALTER TABLE `penguji`
  ADD PRIMARY KEY (`id_penguji`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_ranting` (`id_ranting`),
  ADD KEY `id_cabang` (`id_cabang`);

--
-- Indexes for table `pengurus`
--
ALTER TABLE `pengurus`
  ADD PRIMARY KEY (`id_pengurus`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_cabang` (`id_cabang`);

--
-- Indexes for table `ranting`
--
ALTER TABLE `ranting`
  ADD PRIMARY KEY (`id_ranting`),
  ADD KEY `id_cabang` (`id_cabang`);

--
-- Indexes for table `rayon`
--
ALTER TABLE `rayon`
  ADD PRIMARY KEY (`id_rayon`),
  ADD KEY `id_ranting` (`id_ranting`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `sambung`
--
ALTER TABLE `sambung`
  ADD PRIMARY KEY (`id_sambung`);

--
-- Indexes for table `senam`
--
ALTER TABLE `senam`
  ADD PRIMARY KEY (`id_senam`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id_session`),
  ADD KEY `id_lembar_soal` (`id_lembar_soal`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id_siswa`),
  ADD KEY `id_event` (`id_event`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_ranting` (`id_ranting`),
  ADD KEY `id_rayon` (`id_rayon`);

--
-- Indexes for table `soal`
--
ALTER TABLE `soal`
  ADD PRIMARY KEY (`id_soal`),
  ADD KEY `id_lembar_soal` (`id_lembar_soal`);

--
-- Indexes for table `soal_jurus`
--
ALTER TABLE `soal_jurus`
  ADD PRIMARY KEY (`id_soal_jurus`);

--
-- Indexes for table `standar_fisik`
--
ALTER TABLE `standar_fisik`
  ADD PRIMARY KEY (`id_standar_fisik`);

--
-- Indexes for table `teknik`
--
ALTER TABLE `teknik`
  ADD PRIMARY KEY (`id_teknik`),
  ADD KEY `id_siswa` (`id_siswa`);

--
-- Indexes for table `ukcw`
--
ALTER TABLE `ukcw`
  ADD PRIMARY KEY (`id_ukcw`),
  ADD KEY `id_siswa` (`id_siswa`),
  ADD KEY `id_event` (`id_event`),
  ADD KEY `id_rayon` (`id_rayon`);

--
-- Indexes for table `ukt`
--
ALTER TABLE `ukt`
  ADD PRIMARY KEY (`id_ukt`);

--
-- Indexes for table `ukt_hijau`
--
ALTER TABLE `ukt_hijau`
  ADD PRIMARY KEY (`id_ukt_hijau`),
  ADD KEY `id_siswa` (`id_siswa`),
  ADD KEY `id_event` (`id_event`),
  ADD KEY `id_rayon` (`id_rayon`);

--
-- Indexes for table `ukt_jambon`
--
ALTER TABLE `ukt_jambon`
  ADD PRIMARY KEY (`id_ukt_jambon`),
  ADD KEY `id_siswa` (`id_siswa`),
  ADD KEY `id_event` (`id_event`),
  ADD KEY `id_rayon` (`id_rayon`);

--
-- Indexes for table `ukt_putih`
--
ALTER TABLE `ukt_putih`
  ADD PRIMARY KEY (`id_ukt_putih`),
  ADD KEY `id_siswa` (`id_siswa`),
  ADD KEY `id_event` (`id_event`),
  ADD KEY `id_rayon` (`id_rayon`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_ranting` (`id_ranting`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cabang`
--
ALTER TABLE `cabang`
  MODIFY `id_cabang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `daftar_jurus`
--
ALTER TABLE `daftar_jurus`
  MODIFY `id_daftar_jurus` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_sambung`
--
ALTER TABLE `detail_sambung`
  MODIFY `id_detail_sambung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fisik`
--
ALTER TABLE `fisik`
  MODIFY `id_fisik` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penguji`
--
ALTER TABLE `penguji`
  MODIFY `id_penguji` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pengurus`
--
ALTER TABLE `pengurus`
  MODIFY `id_pengurus` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ranting`
--
ALTER TABLE `ranting`
  MODIFY `id_ranting` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rayon`
--
ALTER TABLE `rayon`
  MODIFY `id_rayon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sambung`
--
ALTER TABLE `sambung`
  MODIFY `id_sambung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `senam`
--
ALTER TABLE `senam`
  MODIFY `id_senam` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id_session` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id_siswa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `soal_jurus`
--
ALTER TABLE `soal_jurus`
  MODIFY `id_soal_jurus` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `standar_fisik`
--
ALTER TABLE `standar_fisik`
  MODIFY `id_standar_fisik` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teknik`
--
ALTER TABLE `teknik`
  MODIFY `id_teknik` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukcw`
--
ALTER TABLE `ukcw`
  MODIFY `id_ukcw` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukt`
--
ALTER TABLE `ukt`
  MODIFY `id_ukt` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukt_hijau`
--
ALTER TABLE `ukt_hijau`
  MODIFY `id_ukt_hijau` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukt_jambon`
--
ALTER TABLE `ukt_jambon`
  MODIFY `id_ukt_jambon` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukt_putih`
--
ALTER TABLE `ukt_putih`
  MODIFY `id_ukt_putih` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_sambung`
--
ALTER TABLE `detail_sambung`
  ADD CONSTRAINT `detail_sambung_ibfk_1` FOREIGN KEY (`id_sambung`) REFERENCES `sambung` (`id_sambung`),
  ADD CONSTRAINT `detail_sambung_ibfk_2` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `fisik`
--
ALTER TABLE `fisik`
  ADD CONSTRAINT `fisik_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `jurus`
--
ALTER TABLE `jurus`
  ADD CONSTRAINT `jurus_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `kunci_soal`
--
ALTER TABLE `kunci_soal`
  ADD CONSTRAINT `kunci_soal_ibfk_1` FOREIGN KEY (`id_soal`) REFERENCES `soal` (`id_soal`);

--
-- Constraints for table `lembar_soal`
--
ALTER TABLE `lembar_soal`
  ADD CONSTRAINT `lembar_soal_ibfk_1` FOREIGN KEY (`id_ranting`) REFERENCES `ranting` (`id_ranting`);

--
-- Constraints for table `penguji`
--
ALTER TABLE `penguji`
  ADD CONSTRAINT `penguji_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `penguji_ibfk_2` FOREIGN KEY (`id_ranting`) REFERENCES `ranting` (`id_ranting`),
  ADD CONSTRAINT `penguji_ibfk_3` FOREIGN KEY (`id_cabang`) REFERENCES `cabang` (`id_cabang`);

--
-- Constraints for table `pengurus`
--
ALTER TABLE `pengurus`
  ADD CONSTRAINT `pengurus_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `pengurus_ibfk_2` FOREIGN KEY (`id_cabang`) REFERENCES `cabang` (`id_cabang`);

--
-- Constraints for table `ranting`
--
ALTER TABLE `ranting`
  ADD CONSTRAINT `ranting_ibfk_1` FOREIGN KEY (`id_cabang`) REFERENCES `cabang` (`id_cabang`);

--
-- Constraints for table `rayon`
--
ALTER TABLE `rayon`
  ADD CONSTRAINT `rayon_ibfk_1` FOREIGN KEY (`id_ranting`) REFERENCES `ranting` (`id_ranting`);

--
-- Constraints for table `senam`
--
ALTER TABLE `senam`
  ADD CONSTRAINT `senam_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`id_lembar_soal`) REFERENCES `lembar_soal` (`id_lembar_soal`),
  ADD CONSTRAINT `session_ibfk_2` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `siswa_ibfk_1` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`),
  ADD CONSTRAINT `siswa_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `siswa_ibfk_3` FOREIGN KEY (`id_ranting`) REFERENCES `ranting` (`id_ranting`),
  ADD CONSTRAINT `siswa_ibfk_4` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id_rayon`);

--
-- Constraints for table `soal`
--
ALTER TABLE `soal`
  ADD CONSTRAINT `soal_ibfk_1` FOREIGN KEY (`id_lembar_soal`) REFERENCES `lembar_soal` (`id_lembar_soal`);

--
-- Constraints for table `teknik`
--
ALTER TABLE `teknik`
  ADD CONSTRAINT `teknik_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`);

--
-- Constraints for table `ukcw`
--
ALTER TABLE `ukcw`
  ADD CONSTRAINT `ukcw_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`),
  ADD CONSTRAINT `ukcw_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`),
  ADD CONSTRAINT `ukcw_ibfk_3` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id_rayon`);

--
-- Constraints for table `ukt_hijau`
--
ALTER TABLE `ukt_hijau`
  ADD CONSTRAINT `ukt_hijau_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`),
  ADD CONSTRAINT `ukt_hijau_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`),
  ADD CONSTRAINT `ukt_hijau_ibfk_3` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id_rayon`);

--
-- Constraints for table `ukt_jambon`
--
ALTER TABLE `ukt_jambon`
  ADD CONSTRAINT `ukt_jambon_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`),
  ADD CONSTRAINT `ukt_jambon_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`),
  ADD CONSTRAINT `ukt_jambon_ibfk_3` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id_rayon`);

--
-- Constraints for table `ukt_putih`
--
ALTER TABLE `ukt_putih`
  ADD CONSTRAINT `ukt_putih_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `siswa` (`id_siswa`),
  ADD CONSTRAINT `ukt_putih_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `event` (`id_event`),
  ADD CONSTRAINT `ukt_putih_ibfk_3` FOREIGN KEY (`id_rayon`) REFERENCES `rayon` (`id_rayon`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`id_ranting`) REFERENCES `ranting` (`id_ranting`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
