DROP TABLE IF EXISTS nutrition;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS work;
DROP TABLE IF EXISTS excercise;


CREATE TABLE nutrition (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    fats REAL,
    carbs REAL,
    sugar REAL,
    protein REAL,
    calories REAL,
    size REAL,
    metric TEXT,
    price REAL
);


CREATE TABLE food (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nutrition_id INTEGER,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity REAL,
    FOREIGN KEY (nutrition_id) REFERENCES nutrition (id)
);


CREATE TABLE work_type (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    total_time integer,
    notes TEXT,
    last_work TIMESTAMP
);


CREATE TABLE work (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    work_type_id INTEGER,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duration integer,
    FOREIGN KEY (work_type_id) REFERENCES work_type (id)
);

CREATE TABLE sleep (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    y_bed_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    wake_up TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bed_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hn_item (
        id INTEGER PRIMARY KEY,
        deleted INTEGER,
        type TEXT,
        author TEXT,
        time INTEGER,
        text TEXT,
        dead INTEGER,
        parent TEXT,
        poll TEXT,
        kids TEXT,
        url TEXT,
        score INTEGER,
        title TEXT,
        parts TEXT,
        descendants INTEGER,

        front_rank   INTEGER,
        new_rank   INTEGER,
        best_rank   INTEGER,
        ask_rank   INTEGER,
        show_rank   INTEGER,
        job_rank   INTEGER,

        starred INTEGER

);

CREATE TABLE hn_delete (
        id INTEGER PRIMARY KEY,
        deleted INTEGER,
        type TEXT,
        author TEXT,
        time INTEGER,
        text TEXT,
        dead INTEGER,
        parent TEXT,
        poll TEXT,
        kids TEXT,
        url TEXT,
        score INTEGER,
        title TEXT,
        parts TEXT,
        descendants INTEGER,

        front_rank   INTEGER,
        new_rank   INTEGER,
        best_rank   INTEGER,
        ask_rank   INTEGER,
        show_rank   INTEGER,
        job_rank   INTEGER
);

CREATE TABLE starred (
        id INTEGER PRIMARY KEY,
        deleted INTEGER,
        type TEXT,
        author TEXT,
        time INTEGER,
        text TEXT,
        dead INTEGER,
        parent TEXT,
        poll TEXT,
        kids TEXT,
        url TEXT,
        score INTEGER,
        title TEXT,
        parts TEXT,
        descendants INTEGER

);