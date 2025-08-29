package com.hotelway.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

//...
@Builder.Default // Add this annotation
private LocalDateTime createdAt = LocalDateTime.now();
        //...
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "blog_posts")
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User author;

    @Column(nullable = false)
    private String title;

    @Lob // Large Object, for long text
    @Column(nullable = false)
    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();
}