public class Note {
	private int pitch;
	//duration is the denominator of the fraction of a whole note
	private int duration;
	private int volume;
	private String status;

	public Note(int pitch, int duration) {
		setPitch(pitch);
		setDuration(duration);
	}

	public int getPitch() {
		return this.pitch;
	}

	public int getDuration() {
		return this.duration;
	}

	public int getVolume() {
		return this.volume;
	}

	public void setPitch(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.pitch = test;
		else
			throw IllegalArgumentException();
	}

	public void setVolume(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.volume = test;
		else
			throw IllegalArgumentException();
	}

	public void setDuration(int test) {
		this.duration = test;
	}

	public void play() {
		//playing the note code goes here
	}

	public String toString(int tempo) {
		//convert this to a string
	}
}