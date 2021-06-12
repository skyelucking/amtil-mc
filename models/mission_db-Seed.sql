
CREATE DATABASE `missions_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `equipment_details` (
  `equip_id` int NOT NULL AUTO_INCREMENT,
  `equip_name` varchar(255) DEFAULT NULL,
  `equip_category` varchar(255) NOT NULL,
  `equip_description` varchar(255) DEFAULT NULL,
  `equip_img` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_user` int DEFAULT NULL,
  PRIMARY KEY (`equip_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_basics` (
  `mission_id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `pm_url` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `cover_img` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`mission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_equiplist` (
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  `equipmentDetailEquipId` int NOT NULL,
  `missionBasicMissionId` int NOT NULL,
  PRIMARY KEY (`equipmentDetailEquipId`,`missionBasicMissionId`),
  KEY `missionBasicMissionId` (`missionBasicMissionId`),
  CONSTRAINT `mission_equiplist_ibfk_1` FOREIGN KEY (`equipmentDetailEquipId`) REFERENCES `equipment_details` (`equip_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mission_equiplist_ibfk_2` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_questionlist` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `missionBasicMissionId` int NOT NULL,
  `q_order` int DEFAULT NULL,
  `q_text` mediumtext,
  `q_ansA` mediumtext,
  `q_ansB` mediumtext NOT NULL,
  `q_ansC` mediumtext,
  `q_ansD` mediumtext,
  `q_ansE` mediumtext,
  `q_ansCorrect` mediumtext,
  `q_img` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  `q_position` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_references` (
  `reference_id` int NOT NULL AUTO_INCREMENT,
  `mission_id` int NOT NULL,
  `ref_order` varchar(255) DEFAULT NULL,
  `ref_img` varchar(255) DEFAULT NULL,
  `ref_url` varchar(255) NOT NULL,
  `ref_desc` varchar(255) DEFAULT NULL,
  `ref_notes` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_user` int DEFAULT NULL,
  PRIMARY KEY (`reference_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_stagelist` (
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  `missionBasicMissionId` int NOT NULL,
  `stageDetailStageId` int NOT NULL,
  PRIMARY KEY (`missionBasicMissionId`,`stageDetailStageId`),
  KEY `stageDetailStageId` (`stageDetailStageId`),
  CONSTRAINT `mission_stagelist_ibfk_1` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mission_stagelist_ibfk_2` FOREIGN KEY (`stageDetailStageId`) REFERENCES `stage_details` (`stage_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_stepslist` (
  `step_id` int NOT NULL AUTO_INCREMENT,
  `step_order` int NOT NULL,
  `missionBasicMissionId` int NOT NULL,
  `step_text` varchar(255) DEFAULT NULL,
  `step_img` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  PRIMARY KEY (`step_id`),
  KEY `missionBasicMissionId` (`missionBasicMissionId`),
  CONSTRAINT `mission_stepslist_ibfk_1` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_storyboard` (
  `storyboard_id` int NOT NULL AUTO_INCREMENT,
  `missionBasicMissionId` int DEFAULT NULL,
  `panel_order` varchar(255) DEFAULT NULL,
  `panel_img` varchar(255) NOT NULL,
  `panel_notes` varchar(255) DEFAULT NULL,
  `color_and_style` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  PRIMARY KEY (`storyboard_id`),
  KEY `missionBasicMissionId` (`missionBasicMissionId`),
  CONSTRAINT `mission_storyboard_ibfk_1` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_team` (
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  `missionBasicMissionId` int NOT NULL,
  `teamDetailMemberId` int NOT NULL,
  PRIMARY KEY (`missionBasicMissionId`,`teamDetailMemberId`),
  KEY `teamDetailMemberId` (`teamDetailMemberId`),
  CONSTRAINT `mission_team_ibfk_1` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mission_team_ibfk_2` FOREIGN KEY (`teamDetailMemberId`) REFERENCES `team_details` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mission_toolslist` (
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  `missionBasicMissionId` int NOT NULL,
  `toolDetailToolId` int NOT NULL,
  PRIMARY KEY (`missionBasicMissionId`,`toolDetailToolId`),
  KEY `toolDetailToolId` (`toolDetailToolId`),
  CONSTRAINT `mission_toolslist_ibfk_1` FOREIGN KEY (`missionBasicMissionId`) REFERENCES `mission_basics` (`mission_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mission_toolslist_ibfk_2` FOREIGN KEY (`toolDetailToolId`) REFERENCES `tool_details` (`tool_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `stage_details` (
  `stage_id` int NOT NULL AUTO_INCREMENT,
  `stage_name` varchar(255) DEFAULT NULL,
  `stage_desc` varchar(255) DEFAULT NULL,
  `stage_img` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  PRIMARY KEY (`stage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `team_details` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ticket_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ticket_title` varchar(255) DEFAULT NULL,
  `ticket_desc` varchar(255) DEFAULT NULL,
  `ticket_category` varchar(255) NOT NULL,
  `ticket_img` varchar(255) DEFAULT NULL,
  `ticket_status` varchar(255) DEFAULT NULL,
  `ticket_startdate` datetime DEFAULT NULL,
  `ticket_enddate` datetime DEFAULT NULL,
  `ticket_assigned` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ticket_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tool_details` (
  `tool_id` int NOT NULL AUTO_INCREMENT,
  `tool_name` varchar(255) DEFAULT NULL,
  `tool_category` varchar(255) NOT NULL,
  `tool_description` mediumtext,
  `tool_img` varchar(255) DEFAULT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_user` int DEFAULT '1',
  PRIMARY KEY (`tool_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fName` varchar(255) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
