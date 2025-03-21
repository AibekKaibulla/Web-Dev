def sleep_in(weekday, vacation):
  return not weekday or vacation

def monkey_trouble(a_smile, b_smile):
  
  return a_smile == b_smile

def sum_double(a, b):
  """
  Given two int values, return their sum. Unless the two values are the same,
  then return double their sum. 
  """
  return a+b if a != b else 2*(a+b)

def diff21(n):
  """
  Given an int n, return the absolute difference between n and 21, except return
  double the absolute difference if n is over 21. 
  """
  return 21-n if n < 22 else 2*(n-21)

def parrot_trouble(talking, hour):
  return talking and hour not in range(7,21)

def makes10(a, b):
  """
  Given 2 ints, a and b, return True if one if them is 10 or if their sum is 10. 
  """
  return a+b == 10 or a == 10 or b == 10

def near_hundred(n):
  """
  Given an int n, return True if it is within 10 of 100 or 200. 
  """
  #return n in range(90,111) + range(190,211)
  return abs(n-100) < 11 or abs(n-200) < 11 

def pos_neg(a, b, negative):
  """
  Given 2 int values, return True if one is negative and one is positive. 
  Unless the parameter "negative" is True, then they both must be negative. 
  """
  return (a < 0) ^ (b < 0) if not negative else (a < 0) and (b < 0)

def not_string(str):
  """
  Given a string, return a new string where "not " has been added to the front. 
  However, if the string already begins with "not", return the string unchanged. 
  """
  return str if str[:3] == "not" else "not " + str

def missing_char(str, n):
  return str[:n] + str[n+1:]

def front_back(str):
  """
  Given a string, return a new string where the first and last chars 
  have been exchanged. 
  """
  return str if len(str) < 2 else str[-1] + str[1:-1] + str[0]

def front3(str):
  return str[:(3 if len(str)>3 else len(str))]*3
