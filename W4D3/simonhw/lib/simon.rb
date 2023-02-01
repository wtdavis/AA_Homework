class Simon
COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until @game_over
      self.take_turn
    end
    if @game_over
    self.game_over_message
    self.reset_game
    end
  end

  def take_turn
    self.show_sequence
    self.require_sequence
    if !@game_over
      self.round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
      self.add_random_color
      seq.each do |color|
        p color
      end
  end

  def require_sequence
    puts "repeat sequence"
    list = gets.chomp
    self.game_over = true unless list == seq

  end

  def add_random_color
    @seq << ["red", "blue", "yellow", "green"].sample 

  end

  def round_success_message

  end

  def game_over_message

  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

end
