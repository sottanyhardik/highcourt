#!/usr/bin/env python

import re

from selenium import webdriver
from bs4 import BeautifulSoup
from time import sleep

link = 'https://l3com.taleo.net/careersection/l3_ext_us/jobsearch.ftl'


class TaleoJobScraper(object):
    def __init__(self):
        self.driver = webdriver.PhantomJS()
        self.driver.set_window_size(1120, 550)

    def scrape(self):
        self.driver.get(link)
        self.driver.find_element_by_tag_name('a')
        print(self.driver.find_element_by_tag_name('a').text)
        self.driver.quit()


if __name__ == '__main__':
    scraper = TaleoJobScraper()
    scraper.scrape()
