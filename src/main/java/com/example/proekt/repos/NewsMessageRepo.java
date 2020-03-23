package com.example.proekt.repos;

import com.example.proekt.domain.NewsMessages;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NewsMessageRepo extends CrudRepository<NewsMessages, Long> {
    List<NewsMessages> findByTag(String tag);
}