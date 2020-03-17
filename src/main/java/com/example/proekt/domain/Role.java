package com.example.proekt.domain;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    USER, STAFF, ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
