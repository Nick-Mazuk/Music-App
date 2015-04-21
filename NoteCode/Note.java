public class Note {
	private int pitch;
	//duration is the denominator of the fraction of a whole note
	private int duration;

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

	public void setPitch(int test) throws IllegalArgumentException {
		if(test <= 127 && test >= 0)
			this.pitch = test;
		else
			throw IllegalArgumentException();
	}

	public void setDuration(int test) {
		this.duration = test;
	}

	public void play() {
		
	}
}