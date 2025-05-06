
package com.example.metroapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private Button buttonNavigate;
    private Button buttonBuyTickets;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize UI elements
        buttonNavigate = findViewById(R.id.buttonNavigate);
        buttonBuyTickets = findViewById(R.id.buttonBuyTickets);

        // Set click listeners
        buttonNavigate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Navigate button clicked", Toast.LENGTH_SHORT).show();
                // Add navigation functionality here
            }
        });

        buttonBuyTickets.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Buy Tickets button clicked", Toast.LENGTH_SHORT).show();
                // Add ticket purchasing functionality here
            }
        });
    }
}
