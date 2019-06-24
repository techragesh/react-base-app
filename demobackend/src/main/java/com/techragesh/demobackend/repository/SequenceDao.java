package com.techragesh.demobackend.repository;

public interface SequenceDao {
    long getNextSequenceId(String key) throws Exception;
}
