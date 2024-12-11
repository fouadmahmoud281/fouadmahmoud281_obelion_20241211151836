CREATE TABLE NCA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ncaName VARCHAR(255) NOT NULL,
    agreement ENUM('agreed', 'notAgreed') NOT NULL,
    submissionRules TEXT NOT NULL
);

INSERT INTO NCA (ncaName, agreement, submissionRules) VALUES
('NCA1', 'agreed', 'Submission rules for NCA1'),
('NCA2', 'notAgreed', 'Submission rules for NCA2');

SELECT * FROM NCA;

UPDATE NCA
SET ncaName = 'Updated NCA', agreement = 'agreed', submissionRules = 'Updated submission rules'
WHERE id = 1;

DELETE FROM NCA WHERE id = 2;
