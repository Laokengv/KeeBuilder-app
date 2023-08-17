
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

CREATE TABLE "keyboard" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"cases_id" INT REFERENCES "cases",
"keycaps_id" INT REFERENCES "keycaps",
"stabilizers_id" INT REFERENCES "stabilizers",
"switches_id" INT REFERENCES "switches",
"name_of_keyboard" VARCHAR(1000)
);


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
('TKC Candybar', '40', 'Hotswap PCB, 6 degree typing angle, One case, two numpad options - left or right', '250', 'tkccandybar.jpeg'),
('TrashMan V4N4G0N', '45', 'A 45% keyboard based on MiniVan, another 40% board but the V4N4G0N includes a half-numrow.', '335', 'v4n4g0n.jpeg'),
('CannonKeys Bakeneko60', '60', '60% o-ring gasket mount keyboard, FR4 universal plate, 6 degree typing angle', '135', 'bakeneko60.jpeg'),
('CruelWorld CW60', '60', '60% gasket mount keyboard, 5 degree typing angle layout options: HHKB, WK, WKL', '490', 'cruelworldcw60.jpeg'),
('CMM.Studio Fuji65', '65', 'Top mount 65% keyboard. 6.5 degree typing angle, stainless steel weight', '350', 'fuji65.jpeg'),
('Wuque Studios Ikki68 Aurora', '65', 'Injection molded polycarbonate case, 6.5 degree typing angle, gasket mount', '130', 'ikki68.jpeg'),
('CannonKeys Satisfaction75', '75', 'OLED Screen, real time clock, rotary encoder, burger o-ring top mount, 6 degree typing angle', '480', 'satisfaction75.jpeg'),
('GeonWorks FrogTKL', 'TKL', 'Top mount case with 6 degree typing angle, brass weight', '295', 'frogtkl.jpeg'),
('KBDFans Odin', '100', 'Leaf spring mount, 7 degree typing angle, PVD aluminum weight, translucent badge', '295', 'odin100.jpeg'),
('CannonKeys Rekt1800', '100', '1800 layout burger mounted keyboard, 7.5 degree typing angle, black FR4 plate', '330', 'rekt1800.jpeg');

INSERT INTO "keycaps" ("name", "type", "specifications", "price", "image")
VALUES
('GMK DualShot', 'Cherry', 'A PlayStation 1 themed keycap set that will bring the nostolgia right to your desk. Double-shot ABS plastic.', '140', 'dualshot.jpeg'),
('GMK Striker', 'Cherry', 'A keycap set tributed to the Japanese National Football Team. Double-shot ABS plastic.', '140', 'gmkstriker.jpeg'),
('GMK Tuzi', 'Cherry', 'A super cute keycap set with bunny-themed novelties. Tuzi Chinese means rabbit. Double-shot ABS plastic.', '140', 'gmktuzi.jpeg'),
('GMK Botanical', 'Cherry', 'Themed after a garden, this set is sure to set the vibe of any earthy setting. Double-shot ABS plastic.','140', 'botanical.jpeg'),
('Drop + Marvel Captain America', 'MT3', 'The First Avenger surely deserves his own keycap set. This set is styled in true blue, dark red, with silver and white legends.', '130', 'dropcaptainamerica.jpeg'),
('Drop + The Lord of The Rings', 'MT3', 'For the true die hards of the franchise, this set encaptures the Elven race with a subdued-green-and-off-white colorway.', '130', 'droplotr.jpeg'),
('MiTo Laser', 'SA', 'A cyberpunk-themed keycap set tthat captures the neon lights, dark shadows, an intruguing antiheroes of the genre.', '150', 'mitolaser.jpeg'),
('MiTo Godspeed', 'SA', 'Inspired by the iconic colorway on the original Apollo 11 Lunar Module Cockpit.', '150', 'mitogodspeed.jpeg'),
('XDA Dots', 'XDA', 'A unique set of keycaps with dots replacing the legends.', '30', 'xdadots.jpeg'),
('Everglide ARC 9009', 'XDA', 'A keycap set with neutral and pastel tones, this set is sure to fit in with any theme you have.', '50', 'arc9009.jpeg');

INSERT INTO "stabilizers" ("name", "type", "specifications", "price", "image")
VALUES 
('Durock V2', 'screw-in', 'A smokey grey translucent exterior with a mold that prevents wire drop out.', '20', 'durockv2.jpeg'),
('C3 Equalz Stabilizers', 'screw-in', 'A clear stabilizer deemd one fo the best stabs on the market.', '20', 'c3stabs.jpeg'),
('Gateron Ink V2', 'screw-in', 'Constructed with the same material as their popular Ink Black switches.', '15', 'gatinkv2.jpeg'),
('Tecsee V3', 'screw-in', 'Multi-compatible stabs for both their medium swithes as well as their standard travel switches.', '15', 'tecseev3.jpeg'),
('Owlab Owlstab', 'screw-in', 'Stabilizers with memory alloy allowing the wire to reshape itself after slight bending.', '20', 'owlstab.jpeg'),
('Cherry Stabilizers', 'screw-in', 'A stable stabilizer for any enthusiast.', '15', 'cherrystab.jpeg'),
('GMK Stabilizers', 'screw-in', 'Industry standard? Well, their keycaps certainly are.', '20', 'gmkstabs.jpeg');

INSERT INTO "switches" ("name", "type", "specifications", "price", "image")
VALUES 
('Cherry Red', 'linear', 'Arguably the most popular switch, Cherry Reds provide a smooth linear actuation. Price listed is for 35 switches.', '22', 'cherryred.jpeg'),
('Gateron Black Ink', 'linear', 'An extremely smooth linear switch with a smokey gray house. Price listed is for 50 switches.', '37', 'gatblackink.jpeg'),
('Alpaca Linears', 'linear', 'A very smooth and quiet switch that could make for an ideal office workspace. Price listed is for 50 switches.', '27', 'alpacalinear.jpeg'),
('Tecsee Eclair', 'linear', 'A smooth linear switch with nylon housing. Price listed is for 50 switches.', '25', 'tecseeeclair.jpeg'),
('NovelKey Creams', 'linear', 'A unique switch that features a POM plastic housing that starts off scratchy, but over time will become extremely smooth. Price listed is for 36 switches.' '25', 'nkcreams.jpeg'),
('Drop + Invyr Holy Panda', 'tactile', 'The name speaks for itself, this switch provides a very tacdtile yet smooth bump and feel. Price listed is for 35 switches.', '42', 'holypanda.jpeg'),
('Durock T1', 'tactile', 'A tactile switch with a polycarbonate top housing, nylon bottom, and POM stem. Price listed is for 20 switches.', '11', 'durockt1.jpeg'),
('Zeal Zealio', 'Tactile', 'An extremely tactile switch with a smooth bump for an amazing typing experience. Price listed is for 10 switches.', '11', 'zealio.jpeg'),
('Gazzew Boba U4T', 'Tactile', 'A tactile switch that is smoother than nylon plastic. Price listed is for 35 switches.', '23', 'bobau4t.jpeg'),
('Kailh Box Jade', 'Box', 'A box switch that provides a clicking sound when actuated. Simlar to tactile switches. Price listed is for 65 switches.', '35', 'boxjades.jpeg');