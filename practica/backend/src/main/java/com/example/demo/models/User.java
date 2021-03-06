package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Data
@Entity
@Table(name = "usuario")
public class User {

    public static Long request;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    private String estado;

    @Column(name = "clave", nullable = false, unique = true, length = 8)
    private String clave;

    private String rol;


    @OneToMany
    @JoinColumn(name = "usuario_id")
    private List<Comentario> comentario;

}
