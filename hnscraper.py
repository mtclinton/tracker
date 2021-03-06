import requests
from dataclasses import dataclass

class Item(object):

    def __init__(self, response_data):
        self.id = response_data.get('id')
        self.deleted = response_data.get('deleted')
        self.type = response_data.get('type')
        self.by = response_data.get('by')
        self.time = response_data.get('time')
        self.text = response_data.get('text')
        self.dead = response_data.get('dead')
        self.parent = response_data.get('parent')
        self.poll = response_data.get('poll')
        self.kids = response_data.get('kids')
        self.url = response_data.get('url')
        self.score = response_data.get('score')
        self.title = response_data.get('title')
        self.parts = response_data.get('parts')
        self.descendants = response_data.get('descendants')

        self.front_rank = None
        self.new_rank = None
        self.best_rank = None
        self.ask_rank = None
        self.show_rank = None
        self.jobs_rank = None

        self.starred = 0


class User(object):

    def __init__(self, response_data):
        self.id = response_data.get('id')
        self.delay = response_data.get('delay')
        self.created = response_data.get('created')
        self.karma = response_data.get('karma')
        self.about = response_data.get('about')
        self.submitted = response_data.get('submitted')


class NewsClient(object):

    def __init__(self):
        self.base_url = 'https://hacker-news.firebaseio.com/v0'
        self.response_format = '.json'

    def sendRequest(self, url):
        return requests.get(url, timeout=5).json()

    def get_item_by_id(self, id):
        """
        Fetches the data from url: https://hacker-news.firebaseio.com/v0/item/<item_id>.json
        Args:
            id (int): unique item id of Hacker News story
        Returns:
            `Item` representing Hacker News story
        """
        endpoint_url = '/item'
        response = self.sendRequest(self.base_url + endpoint_url + '/' + str(id) + self.response_format)
        if response is not None:
            return Item(response)
        return None

    def get_user_by_id(self, id):
        """
        Fetches the data from url:  https://hacker-news.firebaseio.com/v0/user/<user_id>.json
        Args:
            id (case sensitive string): unique id of Hacker News user
        Returns:
            `User` representing Hacker News user
        """
        endpoint_url = '/user'
        try:
            response = self.sendRequest(self.base_url + endpoint_url + '/' + id + self.response_format)
        except requests.ConnectionError as e:
            print(str(e))
        return User(response)

    def get_max_item_id(self):
        """
        Fetches the current largest item id from the url: https://hacker-news.firebaseio.com/v0/maxitem.json
        Returns:
            `int` of the largest item id
        """
        endpoint_url = '/maxitem'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response

    def get_top_story_ids(self, limit=500):
        endpoint_url = '/topstories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_new_story_ids(self, limit=500):
        endpoint_url = '/newstories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_best_story_ids(self, limit=500):
        endpoint_url = '/beststories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_ask_story_ids(self, limit=200):
        endpoint_url = '/askstories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_show_story_ids(self, limit=200):
        endpoint_url = '/showstories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_job_story_ids(self, limit=200):
        endpoint_url = '/jobstories'
        response = self.sendRequest(self.base_url + endpoint_url + self.response_format)
        return response[:limit]

    def get_top_story(self, fetchMax=500):
        """
        Fetches up to 500 of the latest top stories from the url:
        https://hacker-news.firebaseio.com/v0/topstories.json
        Args:
            fetchMax: number of stories to fetch. Note: max value is 500
        Returns
            stories as list of `Item`
        """
        top_story_ids = self.get_top_story_ids(limit=fetchMax)
        top_story_items = []
        for top_story_id in top_story_ids:
            top_story_items.append(self.get_item_by_id(top_story_id))
        return top_story_items

    def get_ask_story(self, fetchMax=200):
        """
        Fetches up to 200 of the latest Ask Hacker News stories from the url:
        https://hacker-news.firebaseio.com/v0/askstories.json
        Args:
            fetchMax: number of stories to fetch. Note: max value is 200
        Returns:
            stories as list of `Item`
        """
        ask_story_ids = self.get_ask_story_ids(limit=fetchMax)
        ask_story_items = []
        for ask_story_id in ask_story_ids:
            ask_story_items.append(self.get_item_by_id(ask_story_id))
        return ask_story_items

    def get_new_story(self, fetchMax=500):
        new_story_ids = self.get_new_story_ids(limit=fetchMax)
        new_story_items = []
        for new_story_id in new_story_ids:
            new_story_items.append(self.get_item_by_id(new_story_id))
        return new_story_items

    def get_show_story(self, fetchMax=200):
        """
        Fetches up to 200 of the latest Show Hacker News stories from the url:
        https://hacker-news.firebaseio.com/v0/showstories.json
        Args:
            fetchMax: number of stories to fetch. Note: max value is 200
        Returns:
            stories as list of `Item`
        """
        show_story_ids = self.get_show_story_ids(limit=fetchMax)
        show_story_items = []
        for show_story_id in show_story_ids:
            show_story_items.append(self.get_item_by_id(show_story_id))
        return show_story_items

    def get_best_story(self, fetchMax=500):
        """
        Fetches up to 500 of the best Hacker News stories from the url:
        https://hacker-news.firebaseio.com/v0/beststories.json
        Args:
            fetchMax: number of stories to fetch. Note: max value is 200
        Returns:
            stories as list of `Item`
        """
        best_story_ids = self.get_best_story_ids(limit=fetchMax)
        best_story_items = []
        for best_story_item in best_story_ids:
            best_story_items.append(self.get_item_by_id(best_story_item))
        return best_story_items

    def get_job_story(self, fetchMax=200):
        job_story_ids = self.get_job_story_ids(limit=fetchMax)
        job_story_items = []
        for job_story_id in job_story_ids:
            job_story_items.append(self.get_item_by_id(job_story_id))
        return job_story_items

    def get_item(self, item_id):
        item = self.get_item_by_id(item_id)
        if item.type is not 'job' or 'pollopt':  # these do not have kids
            kids_id_list = item.kids
            kids_item_list = []
            for kids_id in kids_id_list:
                kids_item = self.get_item_by_id(kids_id)
                kids_item_list.append(kids_item)
            item.kids = kids_item_list
        return item


def main():
    print('hackernews-client v0.1\n\nExamples:\n\n')




if __name__ == "__main__":
    main()