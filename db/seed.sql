create table houses (
    id serial PRIMARY KEY,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent DECIMAL
)

insert into houses (id, name, address, city,	state, zip, img, mortgage, rent)
values (1, 'Lux', '512 8th ave', 'San Francisco', 'CA', 94118, 'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-0.3.5&s=db5e99333c2d621fb759725001026781&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb', 1, 5000)