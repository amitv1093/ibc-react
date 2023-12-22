-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 12:43 PM
-- Server version: 8.0.32
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insert`
--

-- --------------------------------------------------------

--
-- Table structure for table `om`
--

CREATE TABLE `om` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `om`
--

INSERT INTO `om` (`id`, `name`, `email`, `subject`, `phone`, `message`) VALUES
(38, 'Mukesh Vishwakarma', 'Mukesh@gmail.com', 'latest', '0000000000', 'Congrulations'),
(39, 'Testing', 'testing@gmail.com', 'testing', '8888888888', 'this is testing'),
(40, 'Testing', 'testing@gmail.com', 'testing', '8888888888', 'this is testing'),
(41, 'Amitabh Bachchan', 'bigb@gmail.com', 'KBC', '7777777777', 'Kaun Banega Carorpati');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `email`, `password`) VALUES
(4, 'Chand kumar', 'tripathi@420', 'djkfdfkdjf'),
(5, 'Testing', 'testing@gmail.com', 'testing@123'),
(6, 'Amitabh Bachchan', 'bigb@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `upload`
--

CREATE TABLE `upload` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `resume` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `upload`
--

INSERT INTO `upload` (`id`, `name`, `email`, `resume`) VALUES
(94, 'Mukesh Vishwakarma', 'Mukesh@gmail.com', 'upload/Hanuman chalisa.pdf'),
(95, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(96, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(97, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(98, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(99, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(100, 'amit vishwakarma', 'amitv1093@gmail.com', 'upload/Hanuman chalisa.pdf'),
(101, '', '', 'upload/'),
(102, 'Testing', 'testing@gmail.com', 'upload/Ganesh ji arti.pdf'),
(103, 'Amitabh Bachchan', 'bigb@gmail.com', 'upload/Ganesh ji arti.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int NOT NULL,
  `description` varchar(50) NOT NULL,
  `thumbnailUrl` varchar(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `videoUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `description`, `thumbnailUrl`, `title`, `videoUrl`) VALUES
(101, 'This is a modified video description.', 'https://picsum.photos/640/360', 'My video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(102, 'This is a modified video description.', 'https://picsum.photos/640/360', 'My video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(103, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(104, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(105, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(106, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'hhttps://www.youtube.com/embed/tgbNymZ7vqY'),
(107, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'https://www.youtube.com/embed/tgbNymZ7vqY'),
(108, 'This is a new video description.', 'https://picsum.photos/640/360', 'This is a new video title', 'https://www.youtube.com/embed/tgbNymZ7vqY');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `om`
--
ALTER TABLE `om`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload`
--
ALTER TABLE `upload`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `om`
--
ALTER TABLE `om`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `upload`
--
ALTER TABLE `upload`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
