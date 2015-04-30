package io.github.nick_mazuk.playinganote;

import android.media.MediaPlayer;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

import java.io.IOException;


public class PlayingAnAwesomeNote extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_playing_an_awesome_note);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_playing_an_awesome_note, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void playNote(android.view.View view) {
        MediaPlayer mp = new MediaPlayer();
        final Button testButton = (Button) findViewById(R.id.start);
        testButton.setTag(1);
        testButton.setText("Pause");
        try {
            mp.reset();
            mp.setDataSource("Piano116.mp3");
            mp.prepare();
            mp.start();
        } catch (IllegalArgumentException e) {

        } catch (IllegalStateException e) {

        } catch (IOException e) {

        }
    }
}
