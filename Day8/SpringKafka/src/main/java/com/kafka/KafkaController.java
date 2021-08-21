package com.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class KafkaController {
	
	// Ensure that ZooKeeper, Kafka server is running 
	// Topic is created
	private static final String KAFKA_TOPIC = "TelstraTopic";
	
	@Autowired
	KafkaTemplate<String, Player> kafkaTemplate;
	
	private Player createStartPlayer() {
		Player player = new Player();
		
		player.setName("Neha");
		player.setAlias("Star");
		player.setMaxSpeed(24);
		player.setTeam("Telstra 5G");
		
		return player;
	}

	@PostMapping("/publish")
	//public String publishToKafka(@RequestParam String data) {
	public String publishToKafka() {
		
		Player startPlayer = createStartPlayer();
		
		try {
			kafkaTemplate.send(KAFKA_TOPIC, startPlayer);
		} catch (Exception e) {
			return "Error during publishing"; 
		}
		
		return "The data is " + startPlayer.toString() + "is successfully published to kafka";
	}
	
	//Listener / Consumer
	@KafkaListener(id="hey", topics=KAFKA_TOPIC)
	public void listenToTopicData(Player player) {
		System.out.println(player.toString());
	}
}







