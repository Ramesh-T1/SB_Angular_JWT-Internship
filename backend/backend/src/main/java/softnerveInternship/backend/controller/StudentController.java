package softnerveInternship.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import softnerveInternship.backend.entity.Student;
import softnerveInternship.backend.service.StudentService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {
   
	@Autowired
	StudentService s;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/retrieveall")
	public List<Student> getAllStudents()
	{
		return s.findAll();	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/register")
	public Student register(@Valid @RequestBody Student sd)
	{
		return s.save(sd);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/retrieveById/{id}")
	public Student getOneStudent(@PathVariable int id)
	{
		return s.findById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/{id}")
	public Student update(@PathVariable int id,@RequestBody Student nd)
	{
		Student r=s.findById(id);
		if(r.getId()==id)
		{
			r=nd;
		}
		return s.save(r);
		
	}	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable int id)
	{
		s.deleteById(id);
	}

}
