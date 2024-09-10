package softnerveInternship.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import softnerveInternship.backend.entity.Student;
import softnerveInternship.backend.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepo;
	
	public List<Student> findAll() {
		return studentRepo.findAll();
	}

	public Student save(Student sd) {
		return studentRepo.save(sd);
	}

	public Student findById(int id) {
		return studentRepo.findById(id);
	}

	public void deleteById(int id) {
		 studentRepo.deleteById(id);
	}

}
