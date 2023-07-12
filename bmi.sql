-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 30, 2023 at 09:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bmi`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `image` varchar(264) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `pregnant` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `image`, `age`, `gender`, `height`, `weight`, `pregnant`) VALUES
(1, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'Male', 20, 20, 0),
(2, 'sales', 'test', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'male', 4, 3, 0),
(3, 'tok', 'toy', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 19, 'female', 4, 3, 0),
(4, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'female', 24, 67, 1),
(5, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'female', 24, 67, 1),
(6, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'female', 3, 2, 1),
(7, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'female', 2, 16, 1),
(8, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 25, 'female', 4, 64, 1),
(9, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'male', 1, 2, 0),
(10, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'male', 4, 2, 0),
(11, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'male', 4, 100, 0),
(12, 'test', 'work', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'male', 4, 10000, 0),
(13, 'sales', 'ert', '/home/umesh/Desktop/BMI_Node/uploads/download.jpeg', 23, 'female', 2, 60, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
