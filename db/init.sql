create table employee (code varchar(8) PRIMARY KEY, firstname varchar(100), lastname varchar(100),bornDate Date, department varchar(8));
		insert into employee (code, firstname, lastname, bornDate, department) values ('EMP-0001', 'albert', 'einstein','2000/06/13','DEP-0001');
		insert into employee (code, firstname, lastname, bornDate, department) values ('EMP-0002', 'isaac', 'newton','1994/05/15','DEP-0002');
		insert into employee (code, firstname, lastname, bornDate, department) values ('EMP-0003', 'marie', 'curie','1456/12/08','DEP-0003');
		select * from employee;
        
create table department (code varchar(8) PRIMARY KEY , name varchar(100) NOT NULL , description varchar(500));
		insert into department (code, name, description) values ('DEP-0001', 'Contabilidad', 'Contabilidad');
        insert into department (code, name, description) values ('DEP-0002', 'Informatica', 'Informatica');
        insert into department (code, name, description) values ('DEP-0003', 'Recursos Humanos', 'Recursos Humanos');
        select * from department;