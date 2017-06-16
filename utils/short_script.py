import urllib.request
from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
from pyvirtualdisplay import Display

def fetch_url(url):
    req = urllib.request.Request(
        url,
        data=None,
        headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
        }
    )
    f = urllib.request.urlopen(req)
    return f.read().decode('utf-8')


def fetch_split_data(data, start, end):
    if start in data:
        if end:
            return data.split(start)[1].split(end)[0].replace('\n',' ').replace('- ','').strip()
        else:
            return data.split(start)[1].replace('\n',' ').replace('- ','').strip()
    else:
        return None


def citation_fetch(journal_name,journal_year,journal_page,journal_volume='0',journal_suppl='No'):
    try:
        display = Display(visible=0, size=(800, 600))
        display.start()
        driver = webdriver.PhantomJS()
        driver.set_window_size(1120, 550)
        driver.get("http://judis.nic.in/supremecourt/citation.aspx")
        select = Select(driver.find_element_by_name('ddljournal'))
        select.select_by_visible_text(journal_name)
        select = Select(driver.find_element_by_name('ddlyear2'))
        select.select_by_visible_text(journal_year)
        select = Select(driver.find_element_by_name('ddlvol'))
        select.select_by_visible_text(journal_volume)
        select = Select(driver.find_element_by_name('ddlsupp'))
        select.select_by_visible_text(journal_suppl)
        input = driver.find_element_by_name('txtpage')
        input.send_keys(journal_page)
        button = driver.find_element_by_name('button')
        button.click()
        time.sleep(2)
        window_after = driver.window_handles[1]
        driver.switch_to_window(window_after)
        data = driver.find_element_by_name('txtqrydsp').text
        data_dict = {'petitioner': fetch_split_data(data, 'PETITIONER:', '\n\n'),
                     'respondent': fetch_split_data(data, 'RESPONDENT:', '\n\n'),
                     'date_of_judgement': fetch_split_data(data, 'DATE OF JUDGMENT:', '\n\n'),
                     'bench': fetch_split_data(data, 'BENCH:', '\n\n'),
                     'citation': fetch_split_data(data, 'CITATION:', '\n\n'),
                     'act': fetch_split_data(data, 'ACT:', '\n\n'),
                     'headnote': fetch_split_data(data, 'HEADNOTE:', '\n\n'),
                     'judgment': fetch_split_data(data, '\nJUDGMENT:', None),
                     'status': True}
        driver.quit()
        display.stop()
    except:
        data_dict = {'status':False}
    return data_dict