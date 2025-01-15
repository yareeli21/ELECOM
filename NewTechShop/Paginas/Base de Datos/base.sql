----------	PROYECTO DE ANÁLISIS Y DISEÑO DE SISTEMAS	----------
----------	Compra y Venta de Material Electrónico.	----------

-- Se creó el tipo de dato "carrera".
create type carrera as enum('IIA', 'LCD', 'ISC');

-- Se creó el tipo de dato "alumno".
create type alumno as enum('Regular', 'Egresado');

-- Se creó el tipo de dato "pago".
create type pago as enum('Efectivo', 'Transferencia o Depósito');

-- Se creó el tipo de dato "estado".
create type estado as enum('Nuevo', 'Semi-nuevo', 'Usado');

-- Se creó la tabla Usuarios.
create table Usuarios(
    id_usuario serial primary key,
	email varchar(50),
	telefono varchar(14),
	boleta varchar(10),
	carrera_usuario carrera	-- Usando el tipo de dato personalizado 'carrera'.
);

-- Se creó la tabla Comprador.
create table Comprador(
    id_comprador serial primary key,
	id_usuario integer,
    nombre_completo varchar(50),
	foreign key (id_usuario) references Usuarios(id_usuario)
);

-- Se creó la tabla Vendedor.
create table Vendedor(
    id_vendedor serial primary key,
	id_usuario integer,
	nombre varchar(50),
	apellido_paterno varchar(50),
	apellido_materno varchar(50),
	foto_perfil varchar(200),
	contraseña varchar(20),
	tipo_alumno alumno,	-- Usando el tipo de dato personalizado 'alumno'.
	foreign key (id_usuario) references Usuarios(id_usuario)
);

-- Se creó la tabla Servicio.
create table Servicio(
    id_servicio serial primary key,
	id_comprador integer,
	id_vendedor integer,
	material_solicitado varchar(50),
	cantidad_solicitada integer,
	modo_pago pago,	-- Usando el tipo de dato personalizado 'pago'.	
	comentarios varchar(200),
	foreign key (id_comprador) references Comprador(id_comprador),
	foreign key (id_vendedor) references Vendedor(id_vendedor)
);

-- Se creó la tabla Material.
create table Material(
    id_material serial primary key,
	id_servicio integer,
	nombre_material varchar(50),
	cantidad_disponible integer,
	costo decimal(10, 2), -- Permite hasta 10 dígitos en total, con 2 dígitos decimales.
	imagen_material varchar(200),
	estado_material estado,	-- Usando el tipo de dato personalizado 'estado'.	
	descripcion varchar(200),
	foreign key (id_servicio) references Servicio(id_servicio)
);