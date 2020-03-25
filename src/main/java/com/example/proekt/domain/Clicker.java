package com.example.proekt.domain;

import org.hibernate.validator.constraints.Length;
import com.example.proekt.repos.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Clicker{
    @Id
    @SequenceGenerator( name = "clickerSequence", sequenceName = "clicker_sequence", allocationSize = 100)
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "clickerSequence")
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User author;

    private Long age;

    private Long number1_age1;

    private Long number2_age1;

    private Long number3_age1;

    private Long number1_age2;

    private Long number2_age2;

    private Long number3_age2;

    public Clicker() {
    }

    public Clicker(Long id) {
        this.id = id;
    }

    public Clicker(User user,
                   Long number1_age1,
                   Long number2_age1,
                   Long number3_age1,
                   Long number1_age2,
                   Long number2_age2,
                   Long number3_age2
    ){
        this.author = user;
        this.number1_age1 = number1_age1;
        this.number2_age1 = number2_age1;
        this.number3_age1 = number3_age1;
        this.number1_age2 = number1_age2;
        this.number2_age2 = number2_age2;
        this.number3_age2 = number3_age2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public Long getNumber1_age1() {
        return number1_age1;
    }

    public void setNumber1_age1(Long number1_age1) {
        this.number1_age1 = number1_age1;
    }

    public Long getNumber2_age1() {
        return number2_age1;
    }

    public void setNumber2_age1(Long number2_age1) {
        this.number2_age1 = number2_age1;
    }

    public Long getNumber3_age1() {
        return number3_age1;
    }

    public void setNumber3_age1(Long number3_age1) {
        this.number3_age1 = number3_age1;
    }

    public Long getNumber1_age2() {
        return number1_age2;
    }

    public void setNumber1_age2(Long number1_age2) {
        this.number1_age2 = number1_age2;
    }

    public Long getNumber2_age2() {
        return number2_age2;
    }

    public void setNumber2_age2(Long number2_age2) {
        this.number2_age2 = number2_age2;
    }

    public Long getNumber3_age2() {
        return number3_age2;
    }

    public void setNumber3_age2(Long number3_age2) {
        this.number3_age2 = number3_age2;
    }
}
