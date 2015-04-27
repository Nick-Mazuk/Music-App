public class Note {
	private int pitch;
	//duration is the denominator of the fraction of a whole note
	private int duration;
	private int volume;
	private String status;

	//creates several default constructors
	//sets defaults in case none are inputed
	public Note() {
		setPitch(36);
		setDuration(4);
		setVolume(127);
		setStatus("FF");
	}

	//sets defaults if pitch is provided
	public Note(int pitch) {
		setPitch(pitch);
		setDuration(4);
		setVolume(127);
		setStatus("FF");
	}

	//sets defaults if pitch and duration are provided
	public Note(int pitch, int duration) {
		setPitch(pitch);
		setDuration(duration);
		setVolume(127);
		setStatus("FF");
	}

	//sets defaults if pitch, duratoin, and status are provided
	public Note(int pitch, int duration, String status) {
		setPitch(pitch);
		setDuration(duration);
		setVolume(127);
		setStatus(status);
	}

	//sets defaults if pitch, duration, volume, and status are provided
	public Note(int pitch, int duration, int volume, String status) {
		setPitch(pitch);
		setDuration(duration);
		setVolume(volume);
		setStatus(status);
	}

	//get attributes
	public int getPitch() {
		return this.pitch;
	}

	public int getDuration() {
		return this.duration;
	}

	public int getVolume() {
		return this.volume;
	}

	public String getStatus() {
		return this.status;
	}

	//validates and sets pitch attribute. If invalid, throws IllegalArgumentException
	public void setPitch(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.pitch = test;
		else
			throw IllegalArgumentException();
	}

	//validates and sets duration attribute. If invalid, throws IllegalArgumentException
	public void setDuration(int test) throws IllegalArgumentException {
		if(test > 0)
			this.duration = test;
		else
			throw IllegalArgumentException();
	}

	//validates and sets volume attribute. If invalid, throws IllegalArgumentException
	public void setVolume(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.volume = test;
		else
			throw IllegalArgumentException();
	}

	//validates and sets status attribute. If invalid, throws IllegalArgumentException
	public void setStatus(String test) throws IllegalArgumentException { 
		test = test.toUpperCase();
		if(test.charAt(0) == 'F' && test.length() == 2) {
			if(test.charAt(1) == '8' || test.charAt(1) == '9' || (test.charAt(1) >= 'A' && (test.charAt(1) <= 'F')))
				this.status = test;
			else
				throw IllegalArgumentException();
		} else {
			throw IllegalArgumentException();
		}
	}

	//plays the note
	public void play() {
		//playing the note code goes here
	}

	//converts the note to a string
	public String toString(int tempo) {
		//convert this to a string
	}
}