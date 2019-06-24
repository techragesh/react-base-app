package com.techragesh.demobackend.repository.impl;
import com.techragesh.demobackend.exception.SequenceException;
import com.techragesh.demobackend.model.SequenceId;
import com.techragesh.demobackend.repository.SequenceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class SequenceDaoImpl implements SequenceDao {

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public long getNextSequenceId(String key) throws SequenceException {

        //get sequence id
        Query query = new Query(Criteria.where("_id").is(key));

        //increase sequence id by 1
        Update update = new Update();
        update.inc("seq", 1);

        //return new increased id
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);

        //this is the magic happened
        SequenceId sequenceId = mongoOperations.findAndModify(query, update, options, SequenceId.class);

        //if no id, throws SequenceException
        //optional, just a way to tell user when the sequence id is failed to generate.
        if (sequenceId == null) {
            throw new SequenceException("Unable to get sequence id for key" + key);
        }

        return sequenceId.getSeq();
    }
}
