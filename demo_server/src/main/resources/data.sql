-- INSERT INTO USER (ID, LOGIN_ID, PASSWORD, NICKNAME)
-- VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin');
-- INSERT INTO USER (ID, LOGIN_ID, PASSWORD, NICKNAME)
-- VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user');
--
-- INSERT INTO AUTHORITY (AUTHORITY_NAME)
-- values ('ROLE_USER');
-- INSERT INTO AUTHORITY (AUTHORITY_NAME)
-- values ('ROLE_ADMIN');
--
-- INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_NAME)
-- values (1, 'ROLE_USER');
-- INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_NAME)
-- values (1, 'ROLE_ADMIN');
-- INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_NAME)
-- values (2, 'ROLE_USER');