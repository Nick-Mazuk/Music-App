public class Note {
	private int pitch;
	//duration is the denominator of the fraction of a whole note
	private int duration;
	private int volume;
	private String status;

	//creates several default constructors
	public Note() {
		setPitch(36);
		setDuration(4);
		setVolume(127);
		setStatus("FF");
	}

	public Note(int pitch) {
		setPitch(pitch);
		setDuration(4);
		setVolume(127);
		setStatus("FF");
	}

	public Note(int pitch, int duration) {
		setPitch(pitch);
		setDuration(duration);
		setVolume(127);
		setStatus("FF");
	}

	public Note(int pitch, int duration, String status) {
		setPitch(pitch);
		setDuration(duration);
		setVolume(127);
		setStatus(status);
	}

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

	//set attributes
	public void setPitch(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.pitch = test;
		else
			throw IllegalArgumentException();
	}

	public void setDuration(int test) throws IllegalArgumentException {
		if(test > 0)
			this.duration = test;
		else
			throw IllegalArgumentException();
	}

	public void setVolume(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.volume = test;
		else
			throw IllegalArgumentException();
	}

	public void setStatus(String test) throws IllegalArgumentException { 
		test = test.toUpperCase();
		if(test.charAt(0) == 'F') {
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