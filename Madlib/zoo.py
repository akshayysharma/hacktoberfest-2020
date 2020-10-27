import random

userInput = ['']*22
requirements = [
  ('adjective', 0),
  ('plural noun', 1),
  ('adjective', 2),
  ('adjective', 3),
  ('adjective', 4),
  ('noun', 5),
  ('plural noun', 6),
  ('number', 7),
  ('plural animal', 8),
  ('food', 9),
  ('adjective', 10),
  ('plural animal', 11),
  ('colour', 12),
  ('colour', 13),
  ('plural animal', 14),
  ('adjective', 15),
  ('noun', 16),
  ('adjective', 17),
  ('plural animal', 18),
  ('plural noun', 19),
  ('plural noun', 20),
  ('food', 21)
]

random.shuffle(requirements)

for i in range(21):
  nextInput = requirements[i]
  userInput[nextInput[1]] = input('Enter a(n) '+nextInput[0]+': ')

print('The zoo is a {} place to learn about different types\
of {}. There are {} animals and {} animals there. \
Some of the animals are as {} as a(n) {}! There are baby {} who were born {} day(s)\
ago, a petting zoo where you can feed the {} {}, and a(n) {} pool where {} go swimming. \
There are {} and {} {} in the {} {} forest habitat, \
and you can watch the zookeepers feed the {} {}. The gift shop has {} to wear, pictures of {} \
and even snacks like {} you can bring home to remember your day at the zoo.'.format(*userInput))
