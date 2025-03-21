def double_char(str):
  new_str = ""
  for char in str:
    new_str += char*2
  return new_str

def count_hi(str):
  return str.count("hi")

def cat_dog(str):
  return str.count("cat") == str.count("dog")

def count_code(str):
  """
  Return the number of times that the string "code" appears anywhere in the 
  given string, except we'll accept any letter for the 'd', so "cope"  and 
  "cooe" count.
  """
  count = 0
  i=0
  while "co" in str[i:]:
    if len(str[i+str[i:].index("co"):]) >= 4 and str[i+3+str[i:].index("co")] == "e":
      count += 1
    i += str[i:].index("co")+3
  return count

