-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2023 at 03:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `namalengkap` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tentang` varchar(255) NOT NULL,
  `pesan` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`id`, `uuid`, `namalengkap`, `email`, `tentang`, `pesan`, `createdAt`, `updatedAt`) VALUES
(1, '8c3d0882-e6ec-4189-9913-0e5f26320f65', 'Agus', 'agus@gmail.com', 'Testterrr', 'ini contoh testing', '2023-12-15 04:36:03', '2023-12-15 04:36:03'),
(2, '44d5016e-5784-4d13-a893-daae6fab8d20', 'Testing Form', 'testingform@gmail.com', 'Form Testing', 'ini adalah pengujian untuk form', '2023-12-16 14:00:21', '2023-12-16 14:00:21'),
(3, 'e1a76be3-74e6-4ab7-8b5c-838eb1112e96', 'Testing Form', 'testingform@gmail.com', 'Form Testing', 'ini adalah pengujian untuk form', '2023-12-16 14:00:25', '2023-12-16 14:00:25'),
(4, 'b461a952-a700-4667-a928-3ecc132f68a2', 'Testing Form', 'testingform@gmail.com', 'Form Testing', 'ini adalah pengujian untuk form', '2023-12-16 14:03:14', '2023-12-16 14:03:14'),
(5, '0430be9f-f388-461f-b02f-65dd2bc8acef', 'Testing Form', 'testingform@gmail.com', 'Form Testing', 'ini adalah pengujian untuk form', '2023-12-16 14:03:16', '2023-12-16 14:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `namepemilik` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nomerhp` varchar(255) NOT NULL,
  `namaproperti` varchar(255) NOT NULL,
  `tipeproperti` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `jumlahkamar` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `namepemilik`, `email`, `nomerhp`, `namaproperti`, `tipeproperti`, `alamat`, `jumlahkamar`, `foto`, `url`, `userId`, `createdAt`, `updatedAt`) VALUES
(3, '3912e571-1365-45ce-aadf-0ba9a5a655e8', 'Testing Update', 'jhondoe@gmail.com', '089798767890', 'Rukita', 'Kost', 'Jl. suraba', 16, 'a735e6698912db9434ef23ddb4ce9ca4.png', 'http://localhost:5000/images/a735e6698912db9434ef23ddb4ce9ca4.png', 1, '2023-12-16 14:10:12', '2023-12-16 14:42:30'),
(4, '05107914-bfbc-4cf3-9874-d108d7214390', 'jhon doe', 'jhondoe@gmail.com', '089798767890', 'Rukita', 'Kost', 'Jl. suraba', 11, 'a735e6698912db9434ef23ddb4ce9ca4.png', 'http://localhost:5000/images/a735e6698912db9434ef23ddb4ce9ca4.png', 1, '2023-12-16 14:10:14', '2023-12-16 14:10:14'),
(6, '4bc083c9-fd91-4b4a-bfc0-a7ac32330072', 'jhon doe', 'jhondoe@gmail.com', '089798767890', 'Rukita', 'Kost', 'Jl. suraba', 11, 'a735e6698912db9434ef23ddb4ce9ca4.png', 'http://localhost:5000/images/a735e6698912db9434ef23ddb4ce9ca4.png', 1, '2023-12-16 14:11:33', '2023-12-16 14:11:33');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('Efg7QyVXVkfxZep4NCKvKAR1l8N5MnOl', '2023-12-16 16:14:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-15 14:57:21', '2023-12-15 16:14:59'),
('ELxBxNISPtKJ-wl0E8_6EbZUDRdM5wsa', '2023-12-17 13:29:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-16 11:33:22', '2023-12-16 13:29:13'),
('F5GLDVFB_9A_gz4MldvWHHLbCERfYeLS', '2023-12-17 13:24:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-16 11:29:59', '2023-12-16 13:24:32'),
('IUhgKOIRhPVXeQN221de6B2ywyKRRzCe', '2023-12-16 16:20:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-15 16:20:52', '2023-12-15 16:20:52'),
('mXK59Pi-RUnUpDh8wpbYPPFGBvAsjZyc', '2023-12-17 14:42:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-16 13:37:54', '2023-12-16 14:42:30'),
('WPz7SfDmp5eznVEIjaFL17znuaJwMtfi', '2023-12-17 12:01:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-16 11:59:37', '2023-12-16 12:01:48'),
('XuZ4jVernO2ECs8bt2WpbLdt28sl6mWg', '2023-12-17 14:37:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"00c99cf6-95ee-4bbb-9232-32e1a57251ab\"}', '2023-12-16 13:40:53', '2023-12-16 14:37:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '6a8deb66-a8c5-457c-9528-1c07a2867dba', 'Testt', 'test@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$4+W15wM/POUy82GZdz+BcA$kE5ErhmAzifX2kiGbQ2NQ/mnhbnIFOvJOi7Z0nTHVSQ', 'Pemilik Properti', '2023-12-14 09:27:25', '2023-12-14 09:27:25'),
(5, '00c99cf6-95ee-4bbb-9232-32e1a57251ab', 'Jhon Doe', 'jhondoe@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$xJyKuJo5+nhKeW/dgNYvlw$bUW7ymiBiYmSXfkqm1zQbPHY69Bvbh2msMwaOMlhyWU', 'Pemilik Properti', '2023-12-15 05:27:17', '2023-12-15 05:27:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
