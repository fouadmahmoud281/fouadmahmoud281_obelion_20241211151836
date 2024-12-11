CREATE TABLE trading_venue (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId VARCHAR(255) NOT NULL,
    orderType VARCHAR(255) NOT NULL,
    orderQuantity INT NOT NULL CHECK (orderQuantity >= 1)
);

INSERT INTO trading_venue (orderId, orderType, orderQuantity) VALUES ('ORD123', 'LIMIT', 100);
INSERT INTO trading_venue (orderId, orderType, orderQuantity) VALUES ('ORD124', 'MARKET', 150);

SELECT * FROM trading_venue;

UPDATE trading_venue SET orderType = 'LIMIT', orderQuantity = 200 WHERE orderId = 'ORD123';

DELETE FROM trading_venue WHERE orderId = 'ORD124';
