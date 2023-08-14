
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- PRODUCTS TABLES -- 

CREATE TABLE "cases" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL,
    "size" TEXT NOT NULL,
    "specifications" VARCHAR(240) NOT NULL,
    "price" TEXT NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "keycaps" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL,
    "profile" VARCHAR (20) NOT NULL,
    "specifications" VARCHAR(240) NOT NULL,
    "price" TEXT NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "stabilizers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL,
    "type" VARCHAR(120) NOT NULL,
    "specifications" VARCHAR(240) NOT NULL,
    "price" TEXT NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "switches" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL,
    "type" VARCHAR(120) NOT NULL,
    "specifications" VARCHAR(240) NOT NULL,
    "price" TEXT NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "user_id" INT REFERENCES "user"
);

-- JUNCTION TABLES -- 

CREATE TABLE "user_cases" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "cases_id" INT REFERENCES "cases" NOT NULL
);

CREATE TABLE "user_keycaps" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "keycaps_id" INT REFERENCES "keycaps" NOT NULL,
);

CREATE TABLE "user_stabilizers" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "stabilizers_id" INT REFERENCES "stabilizers" NOT NULL
);

CREATE TABLE "user_switches" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "switches_id" INT REFERENCES "switches" NOT NULL
);

-- DATA --

INSERT INTO "cases" ("name", "size", "specifications", "price", "image")
VALUES 
('TKC Candybar', '40', 'Hotswap PCB, 6 degree typing angle, One case, two numpad options - left or right', '$250', 'tkccandybar.jpeg'),
('TrashMan V4N4G0N', '45', 'A 45% keyboard based on MiniVan, another 40% board but the V4N4G0N includes a half-numrow.', '335', 'v4n4g0n.jpeg'),
('CannonKeys Bakeneko60', '60', '60% o-ring gasket mount keyboard, FR4 universal plate, 6 degree typing angle', '135', 'bakeneko60.jpeg'),
('CruelWorld CW60', '60', '60% gasket mount keyboard, 5 degree typing angle layout options: HHKB, WK, WKL', '490', 'cruelworldcw60.jpeg'),
('CMM.Studio Fuji65', '65', 'Top mount 65% keyboard. 6.5 degree typing angle, stainless steel weight', '350', 'fuji65.jpeg'),
('Wuque Studios Ikki68 Aurora', '65', 'Injection molded polycarbonate case, 6.5 degree typing angle, gasket mount', '130', 'ikki68.jpeg'),
('CannonKeys Satisfaction75', '75', 'OLED Screen, real time clock, rotary encoder, burger o-ring top mount, 6 degree typing angle', 'satisfaction75'),
('GeonWorks FrogTKL', 'TKL', 'Top mount case with 6 degree typing angle, brass weight', '295', 'frogtkl.jpeg'),
('KBDFans Odin', '100', 'Leaf spring mount, 7 degree typing angle, PVD aluminum weight, translucent badge', '295', 'odin100.jpeg'),
('CannonKeys Rekt1800', '100', '1800 layout burger mounted keyboard, 7.5 degree typing angle, black FR4 plate', '330', 'rekt1800.jpeg');
