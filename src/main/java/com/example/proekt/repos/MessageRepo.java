package com.example.proekt.repos;

import com.example.proekt.domain.Message;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface MessageRepo extends CrudRepository<Message, Long> {
    List<Message> findByTag(String tag);
}