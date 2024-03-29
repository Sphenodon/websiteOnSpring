package com.example.proekt.domain;

import org.hibernate.validator.constraints.Length;
import com.example.proekt.repos.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Message{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Введите сообщение")
    @Length(max = 2048, message = "Собщение слишком длинное")
    private String text;
    @Length(max = 255, message = "Сообщение слишком длинное")
    private String tag;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User author;

    private String filename;

    private String puzzle_href;

    private Long puzzle_difficult;

    public Message() {
    }

    public Message(String text, String tag, User user, String puzzle_href, Long puzzle_difficult){
        this.author = user;
        this.text = text;
        this.tag = tag;
        this.puzzle_href = puzzle_href;
        this.puzzle_difficult = puzzle_difficult;
    }

    public String getAuthorName(){
        return author != null ? author.getUsername() : "Ghost, hmmm...";
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public User getAuthor() {
        return author;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getTag() {
        return tag;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getPuzzle_href() {
        return puzzle_href;
    }

    public void setPuzzle_href(String puzzle_href) {
        this.puzzle_href = puzzle_href;
    }

    public Long getPuzzle_difficult() {
        return puzzle_difficult;
    }

    public void setPuzzle_difficult(Long puzzle_difficult) {
        this.puzzle_difficult = puzzle_difficult;
    }
}
