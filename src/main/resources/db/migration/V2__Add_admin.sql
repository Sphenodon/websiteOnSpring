insert into usr (id, activation_code, active, email, password, username)
    values (1, '', true, '', '123', 'admin');

insert into user_role (user_id, roles)
    values (1, 'USER'), (1, 'STAFF'), (1, 'ADMIN') ;