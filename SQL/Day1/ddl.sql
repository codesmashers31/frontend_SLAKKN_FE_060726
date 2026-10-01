-- CREATE,ALTER,RENAME,TRUNCATE,DROP - Database,table,column

create database mydb; 

use mydb;

create table emptableone (

userid int primary key auto_increment,
userreplname varchar(20),
useremail varchar(30) unique,
usermobile varchar(20),
userdepartment varchar(20),
userjoindata date,
userrole varchar(20) default "Admin" 


);

ALTER TABLE emptable ADD userage varchar(20);

ALTER TABLE emptable RENAME COLUMN usermobile to usernumber;

ALTER TABLE emptable MODIFY COLUMN userage int;

ALTER TABLE emptable drop COLUMN userrole;



ALTER TABLE emptable ADD userrole varchar(20);

ALTER TABLE emptable RENAME column userrole to role;


ALTER TABLE emptable modify column role int;


ALTER TABLE emptable modify column role varchar(20);



RENAME TABLE emptable TO employee;


DROP TABLE emptableone;
DROP TABLE emptable;

-- create
-- new column add 
-- rename column name
-- modify data types
-- drop
-- rename table
-- drop table

-- comment table tablename command (rename) colunm onldname to newname; 

-- table create - create table tablename (column_name datatypes constirnes  autoincrment); 






